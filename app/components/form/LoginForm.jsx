var React = require('react');
var services = require('Services');

var LoginForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var phone = this.refs.phone.value;
        var email = this.refs.email.value;

        var data = {
          phoneNo: phone,
          email: email
        }

        var that = this;
        services.login(data).then(function(data) {
          console.log("Registered");
          that.props.onGetUser(data);
        }, function (e) {
          alert('Unable to sign in');
        });
    },
    render: function() {
        return (
            <div id="login-form">
              <h3>ล้อคอิน</h3>

              <div className="note">หากคุณยังไม่ได้ลงทะเบียน สามารถลงทะเบียนผ่าน facebook or google ได้ที่ปุ่มด้านล่าง</div>
              <div className="grid-x grid-margin-x">
                <div className="small-6 cell">
                  <a href="#" className="button-facebook">Connect with Facebook</a>
                </div>
                <div className="small-6 cell">
                  <a href="#" className="button-google">Connect with Google+</a>
                </div>
              </div>

              <form onSubmit={this.onFormSubmit}>
                <label>เบอร์โทรศัพท์</label>
                <input type="text" ref="phone" required/>
                <label>อีเมล์</label>
                <input type="email" ref="email" required/>
                <button type="submit" className="button-line expanded">ล้อคอิน</button>
              </form>
            </div>
        );
    }
});

module.exports = LoginForm;
