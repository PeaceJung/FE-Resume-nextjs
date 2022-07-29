const Stacks = () => {
  //
  const stacks = ["react", "typescript", "nodejs"];
  return (
    <div>
      {stacks.map((stack) => (
        <img
          src={`images/${stack}.png`}
          className="rounded me-1"
          alt="react icon"
          width="45"
          height="45"
        />
      ))}
    </div>
  );
};

const ProfileImage = () => (
  <div>
    <img
      src={"images/profile_md.jpeg"}
      className="rounded-circle mx-auto"
      alt="profile image"
      width="100"
      height="100"
    />
  </div>
);

const Header = () => {
  return (
    <div className="row gx-5 header">
      <div className="col">
        <div className="p-3">
          <div className="d-flex justify-content-between">
            <Stacks />
            <ProfileImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
