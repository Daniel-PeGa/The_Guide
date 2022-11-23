import React from 'react';
import { Link } from 'react-router-dom';

const churchList = ({
  churches,
  churchText,
  showchurchText = true,
  showusername = true,
}) => {
  //if (!churches.length) {
   // return <h3>No churches listed Yet</h3>;
  //}

  return (
    <div>
      {showchurchText && <h3>{churchText}</h3>}
      {churches &&
        churches.map((church) => (
          <div key={church._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showusername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${church.username}`}
                >
                  {church.church.username} <br />
                  <span style={{ fontSize: '1rem' }}>
                    Church added on {church.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You added this Church on {church.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{church.churchText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/churches/${church._id}`}
            >
              Enjoy fellowship at ${church.churchName} church!
            </Link>
          </div>
        ))}
    </div>
  );
};

export default churchList;
