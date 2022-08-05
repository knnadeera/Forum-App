import Modal from "../UI/Modal";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <Modal onClose={props.onClose}>     
      <div className={classes.about}>
      <button className={classes.close} onClick={props.onClose}>
        x
      </button>
        <h2>About Us</h2>
        <h3>Welcome to the Nifty Ape Nation!</h3>
        <p>The Collection
The Nifty Ape Nation Avatars are created for entertainment, gaming, and content creation. There are 8,888 unique NFTs and 16 different types of Apes. Each Ape comes with an NPC Bio and a Type Bio to show your Ape's personality. There are five classes of rarity: Common, Uncommon, Rare, Unique, and Legendary. There is also a secret rarity class called Ultra. The release of the Nifty Ape Studios is coming soon, where you will be able to interact with your avatar and change its hair and clothes for content creation. The next major development will be the Ape Fight Club, where you can log in using your Avatar and play other Apes in a 1V1 combat game. Finally, we look forward to bringing you the AI Chat Bot, a feature that will allow your Ape to talk to you and others in several languages.</p>
      </div>
    </Modal>
  );
};

export default About;
