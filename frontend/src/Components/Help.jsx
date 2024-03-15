import "../Components/Scss/Help.scss";
function Help() {
  return (
    <>
      <div className="Help_container">
        <div className="Help">
          <h1>Help?</h1>
          <div className="support_team">
            <div className="team">
              <div className="team_members">
                <h2>Techical support</h2>
                <br />
                <h3>
                  Devendra Kumar Pandit <br /><span>(devendraku18956@gmail.com)</span>
                </h3>
                <h3>
                  Rohit Kafle <br /><span>(rohitkafle123@gmail.com)</span>
                </h3>
              </div>
              <div className="team_members">
                <h2>Customer support</h2>
                <br />
                <h3>
                  Kumari Anuradha <br /><span>(kumarianuradha@gmail.com)</span>
                </h3>
                <h3>
                  Nandini vaish <br /><span>(nandinivaish@gmail.com)</span>
                </h3>
                <h3>
                  Abhijit Kumar <br /><span>(abhijitkumar@gmail.com)</span>
                </h3>
              </div>
            </div>
            <div className="write_email">
              <div className="text_email">
                <input type="email" placeholder="write your email id"/>
                <textarea
                  name="text"
                  id="text_area"
                  cols="30"
                  rows="10"
                  placeholder="Write query here!............."
                ></textarea>
                <button id="send_message">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
