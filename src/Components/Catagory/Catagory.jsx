import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./catagory.css";
import { Link } from "react-router-dom";
import im1 from "../../assets/Sub/thor.jpg";
import im2 from "../../assets/Sub/venam.jpg";
import im3 from "../../assets/Sub/venam2.jpg";
const Catagory = () => {
  return (
    <>
      <h1 className="text-center text-5xl font-semibold">Sub Catagories is here</h1>
      <div className="hp container mx-auto mt-10 mb-10">
        <Tabs>
          <TabList>
            <div className="mx-auto w-[600px] mb-10 text-2xl p-10">
              <Tab>Marvel</Tab>
              <Tab>Avenger</Tab>
              <Tab>Transformer</Tab>
            </div>
          </TabList>

          <TabPanel>
            <div className="he">
              <div className="card w-96  shadow-xl bg-slate-300">
                <figure>
                  <img src={im1} className="p-10" alt="Shoes" />
                </figure>
                <div className="card-body flex justify-between">
                  <h2 className="card-title">
                    {" "}
                    <span className="text-2xl">Thor</span>
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn">
                      <Link to="/alltoys" className="btn">
                        Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="card w-96  shadow-xl bg-slate-300">
                <figure>
                  <img src={im2} className="p-10" alt="Shoes" />
                </figure>
                <div className="card-body flex justify-between">
                  <h2 className="card-title">
                    {" "}
                    <span className="text-2xl">Black venom</span>
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn">
                      <Link to="/alltoys" className="btn">
                        Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="card w-96  shadow-xl bg-slate-300">
                <figure>
                  <img src={im3} className="p-10" alt="Shoes" />
                </figure>
                <div className="card-body flex justify-between">
                  <h2 className="card-title">
                    {" "}
                    <span className="text-2xl">Red Venam</span>
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn">
                      <Link to="/alltoys" className="btn">
                        Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="he">
              <div className="card w-96  shadow-xl bg-slate-300">
                <figure>
                  <img src={im3} className="p-10" alt="Shoes" />
                </figure>
                <div className="card-body flex justify-between">
                  <h2 className="card-title">
                    {" "}
                    <span className="text-2xl">Sniper</span>
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn">
                      <Link to="/alltoys" className="btn">
                        Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="card w-96  shadow-xl bg-slate-300">
                <figure>
                  <img src={im2} className="p-10" alt="Shoes" />
                </figure>
                <div className="card-body flex justify-between">
                  <h2 className="card-title">
                    {" "}
                    <span className="text-2xl">Sniper</span>
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn">
                      <Link to="/alltoys" className="btn">
                        Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="card w-96  shadow-xl bg-slate-300">
                <figure>
                  <img src={im1} className="p-10" alt="Shoes" />
                </figure>
                <div className="card-body flex justify-between">
                  <h2 className="card-title">
                    {" "}
                    <span className="text-2xl">Sniper</span>
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn">
                      <Link to="/alltoys" className="btn">
                        Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="he">
              <div className="card w-96  shadow-xl bg-slate-300">
                <figure>
                  <img src={im1} className="p-10" alt="Shoes" />
                </figure>
                <div className="card-body flex justify-between">
                  <h2 className="card-title">
                    {" "}
                    <span className="text-2xl">Sniper</span>
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn">
                      <Link to="/alltoys" className="btn">
                        Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="card w-96  shadow-xl bg-slate-300">
                <figure>
                  <img src={im2} className="p-10" alt="Shoes" />
                </figure>
                <div className="card-body flex justify-between">
                  <h2 className="card-title">
                    {" "}
                    <span className="text-2xl">Sniper</span>
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn">
                      <Link to="/alltoys" className="btn">
                        Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="card w-96  shadow-xl bg-slate-300">
                <figure>
                  <img src={im3} className="p-10" alt="Shoes" />
                </figure>
                <div className="card-body flex justify-between">
                  <h2 className="card-title">
                    {" "}
                    <span className="text-2xl">Sniper</span>
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn">
                      <Link to="/alltoys" className="btn">
                        Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Catagory;
