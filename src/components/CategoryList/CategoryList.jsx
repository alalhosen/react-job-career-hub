
const CategoryList = () => {
    return (
        <div>
            <div className="mt-8">
                <h2 className="text-5xl text-center">Job Category List</h2>
                <p className="text-center mt-4">
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className=" flex space-x-20 mt-3">
                <div>
                    <h3 className="text-2xl">Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div>
                    <h3 className="text-2xl">Create Design</h3>
                    <p>100+ Jobs Available</p>
                </div>
                <div>
                    <h3 className="text-2xl">Marketing & Sale</h3>
                    <p>150 Jobs Available</p>
                </div>
                <div>
                    <h3 className="text-2xl">Engineering Job</h3>
                    <p>224 Jobs Available</p>
                </div>

            </div>
        </div>
    );
};

export default CategoryList;