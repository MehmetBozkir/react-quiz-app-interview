const Home = () => {

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl ">
            <form className="card-body">
              <ul className="menu bg-gray-100 rounded-box w-full">
                <li>
                  <h2 className="menu-title">RULES</h2>
                  <ul className="text-black">
                    <li>
                      <a>The test is 10 questions in total</a>
                    </li>
                    <li>
                      <a>There are 4 answer options</a>
                    </li>
                    <li>
                      <a>There is only one correct answer choice</a>
                    </li>
                    <li>
                      <a>You have 30 seconds for each question</a>
                    </li>
                    <li>
                      <a>The first 10 seconds are unanswerable</a>
                    </li>
                    <li>
                      <a>Past questions are not returned</a>
                    </li>
                    <li>
                      <a>There is a question time counter</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
          <div>
            <h1 className="text-5xl font-bold max-md:text-center text-black md:text-white">
              Welcome To Quiz App!
            </h1>
            <p className="py-6 max-md:text-center text-black md:text-white font-semibold">
              Please read the questions carefully, you will only be allowed to
              answer once. At the end of the test, your success status will be
              shared with you in a table.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
