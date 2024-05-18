import classes from "./Profile.module.scss";

const Profile = () => {
  const user = {
    firstName: "Иван",
    lastName: "Иванов",
    imageUrl: "/vite.svg",
  };

  return (
    <div className={classes.profile}>
      <img className={classes.profile__img} src={user.imageUrl} alt="vite" />
      <span>{`${user.firstName} ${user.lastName.charAt(0)}.`}</span>
    </div>
  );
};

export default Profile;
