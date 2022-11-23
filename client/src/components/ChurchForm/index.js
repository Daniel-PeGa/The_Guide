import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_CHURCH } from '../../utils/mutations';
import { QUERY_CHURCH, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ChurchForm = () => {
  const [ChurchText, setChurchText] = useState('');

  const [addChurch, { error }] = useMutation(ADD_CHURCH, {
    update(cache, { data: { addChurch } }) {
      try {
        const { church } = cache.readQuery({ query: QUERY_CHURCH });

        cache.writeQuery({
          query: QUERY_CHURCH,
          data: { church: [addChurch, ...church] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      //const { me } = cache.readQuery({ query: QUERY_ME });
      //cache.writeQuery({
        //query: QUERY_ME,
        //data: { me: { ...me, church: [...me.church, addChurch] } },
      //});
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { church } = await addChurch({
        variables: {
          churchName: ChurchText,
          username: Auth.getProfile().data.username,
        },
      });

      setChurchText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'churchText' && value.length <= 280) {
      setChurchText(value);
    }
  };

  return (
    <div>
      <h3>Do you have a church you would like to invite others to?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
               ''
            }`}
          >
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="churchText"
                placeholder="Add your church here..."
                value={ChurchText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Church
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your church. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ChurchForm;
