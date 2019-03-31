import React from 'react';

const MyActions = () => (
  <>
    <h2 className="is-h2">Mes Actions</h2>
    <div className="column is-5 has-text-left">
      <p className="control has-icons-left has-icons-right">
        <button className="button is-info is-inverted is-fullwidth" type="button" name="button">
            Vous avez compris ?
        </button>
        <span className="icon is-small is-left">
          <i className="fas fa-brain" />
        </span>
      </p>
    </div>
    <div className="column is-5 has-text-left">
      <p className="control has-icons-left has-icons-right">
        <button className="button is-info is-inverted is-fullwidth" type="button" name="button">
            Faites un résumé ?
        </button>
        <span className="icon is-small is-left">
          <i className="fas fa-file" />
        </span>
      </p>
    </div>
    <div className="column is-5 has-text-left">
      <p className="control has-icons-left has-icons-right">
        <button className="button is-info is-inverted is-fullwidth" type="button" name="button">
            Vous en êtes où ?
        </button>
        <span className="icon is-small is-left">
          <i className="fas fa-clipboard-list" />
        </span>
      </p>
    </div>
    <div className="column is-5 has-text-left">
      <p className="control has-icons-left has-icons-right">
        <button className="button is-info is-inverted is-fullwidth" type="button" name="button">Reboost</button>
        <span className="icon is-small is-left">
          <i className="fas fa-flushed" />
        </span>
      </p>
    </div>
  </>
);
export default MyActions;
