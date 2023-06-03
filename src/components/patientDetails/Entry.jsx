import React from "react";
import styled from "styled-components";

const Entry = ({ entries }) => {
  console.log("ENTRIES", entries);
  return (
    <EntryWrap>
      <h4 className="entries-header">Entries:</h4>
      {entries &&
        entries.map((entry) => (
          <div className="entry-wrapper" key={entry._id}>
            <div className="item-wrap">
              <div className="entry-title">Date</div>
              <div className="entry-item">{entry.date}</div>
            </div>

            <div className="item-wrap">
              <div className="entry-title">Description</div>
              <div className="entry-item">{entry.description}</div>
            </div>
            <div className="item-wrap">
              <div className="entry-title">Discharge</div>
              <div className="entry-item">
                Criteria: {entry?.discharge?.criteria}
              </div>
              <div className="entry-item">Date: {entry?.discharge?.date}</div>
            </div>
            <div className="item-wrap">
              <div className="entry-title">Hospital</div>
              <div className="entry-item">{entry.type}</div>
            </div>
            <div className="item-wrap">
              <div className="entry-title">Specialist</div>
              <div className="entry-item">{entry.specialist}</div>
            </div>
            <div className="item-wrap">
              <div className="entry-title">Diagnose Code</div>
              {entry.diagnoseCodes &&
                entry.diagnoseCodes.map((item, index) => (
                  <div key={index}>
                    <div className="diag-item">
                      <ul>
                        <li>{item}</li>
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </EntryWrap>
  );
};

const EntryWrap = styled.div`
  .entry-wrapper {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
  }
  .entries-header {
    color: blue;
    text-align: center;
    font-size: 20px;
  }
  .entry-title {
    color: #595959;
    font-weight: 700;
  }
  .item-wrap {
    display: flex;
    flex-direction: column;
    background-color: #efe9e9;
    margin-top: 5px;
    border-radius: 10px;
  }
`;

export default Entry;
