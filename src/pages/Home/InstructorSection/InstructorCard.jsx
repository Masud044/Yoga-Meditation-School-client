

const InstructorCard = ({instructor}) => {
    // console.log(instructor);
    const{email,instructorName,instructorImage} = instructor;
    return (
        <div className="card w-96 bg-amber-400 pt-4 hover:bg-amber-300 hover:text-white bg-opacity-20  shadow-2xl">
        <figure><img className="h-25 w-45 rounded-full" src={instructorImage} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{instructorName}</h2>
            <p className="font-medium">{email}</p>
            
        </div>
    </div>
    );
};

export default InstructorCard;