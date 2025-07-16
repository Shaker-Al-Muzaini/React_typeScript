export  type  teypNameProps={
    name:string;
}
const Profile = ({name}:teypNameProps) => {
    return (
        <div>
            <h2>welcome {name}</h2>
        </div>
    );
};

export default Profile;