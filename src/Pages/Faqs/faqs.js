import React from "react";

const faqs = () => {
  return (
    <div className="faq-section">
      <div className="faq-img">
        <img src="https://training.zuri.team/section7wire.svg" alt="" />
      </div>

      <div className="faq-info">
        <p>Got Questions?</p>
        <h3>Frequently Asked Questions</h3>
      </div>

      <div className="faq-dropdown">
        <div>
          <h4>Would I have to pay to enroll for the training?</h4>
          <p>
            No, the program is completely free thanks to Ingressive For Good
          </p>
        </div>

        <div>
          <h4>What are the things I would need to participate?</h4>
          <p>
            You'll need a laptop, internet connection and the willingness to
            learn through collaboration and mentorship.
          </p>
        </div>

        <div>
          <h4>What happens if i join and I’m not active?</h4>
          <p>
            Participants who join the program and stop engaging will be given
            the chance to catch up. You'll also be assigned a 'study-mate' and
            mentor to help you. However, there is the possibility of not being
            promoted to the next stage if you remain inactive for too long
          </p>
        </div>

        <div>
          <h4>
            Can I switch from the part-time track to full-time and vice versa?
          </h4>
          <p>
            Unfortunately, no, you cannot switch from part-time to full-time and
            vice-versa
          </p>
        </div>

        <div>
          <h4>Will I get paid?</h4>
          <p>
            We reward some participants who complete tasks early, however, this
            is not a weekly reward. All the work that will be done during the
            program are hypothetical.
          </p>
        </div>
      </div>

      <div className="faq-question">
        
        <div>
          <p>Still got questions?</p>
        </div>

        <a href="https://www.twitter.com/thezuriteam">
          <div className="faq-tweet"> <img src="" alt="twitter-icon" />  Tweet them at us</div>
        </a>
      </div>
    </div>
  );
};

export default faqs;
