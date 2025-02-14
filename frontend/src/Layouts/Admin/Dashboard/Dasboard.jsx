import React, { useState, useEffect } from "react";

const Dashboard = () => {

  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [dashboardData, setDashboardData] = useState({});

 

  const columns = [
    {
      name: "User Name",
      selector: (row) => <div title={row?.username || ""}>
        {row.username || ""}
      </div>,
      sortable: true,
      width: '15%',
    },
    {
      name: "Full Name",
      selector: (row) => <div title={row?.fullname || ""}>
        {row.fullname || ""}
      </div>,
      sortable: true,
      width: '20%',
    },
    {
      name: "Email",
      selector: (row) => <div title={row?.email || ""}>
        {row.email || ""}
      </div>,
      sortable: true,
      width: '20%',
    },
    {
      name: "Phone",
      selector: (row) => <div title={row?.phone || ""}>
        {row.phone || ""}
      </div>,
      sortable: true,
      width: '15%',
    },

    {
      name: "Status",
      selector: (row) => <div title={row?.status || ""}>
        {row.status || ""}
      </div>,
      sortable: true,
      width: '15%',
    },
    {
      name: "Last Login",
      selector: (row) => <div title={row?.lastLogin || ""}>
        {row.lastLogin || ""}
      </div>,
      sortable: true,
      width: '15%',
    },
    {
      name: "Created At",
      selector: (row) => <div title={row?.createdAt || ""}>
        {row.createdAt || ""}
      </div>,
      sortable: true,
      width: '15%',
    },






  ];

  return (
    <>

      <div className="pagetitle">
        <h1>Dashboard</h1>
       
      </div>
      <section className="section dashboard">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
               <div className="col-xxl-4 col-xl-12">
                <div className="card info-card customers-card">
                  
                  <div className="card-body">
                    <h5 className="card-title">
                      Total Student
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people" />
                      </div>
                      <div className="ps-3">
                        <h6>1244</h6>
                        <span className="text-danger small pt-1 fw-bold">
                          12%
                        </span>{" "}
                        <span className="text-muted small pt-2 ps-1">decrease</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
             
               
              <div className="col-xxl-4 col-xl-12">
                <div className="card info-card customers-card">
                  
                  <div className="card-body">
                    <h5 className="card-title">
                      Total Teachers
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people" />
                      </div>
                      <div className="ps-3">
                        <h6>1244</h6>
                        <span className="text-danger small pt-1 fw-bold">
                          12%
                        </span>{" "}
                        <span className="text-muted small pt-2 ps-1">decrease</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-12">
                <div className="card info-card customers-card">
                  
                  <div className="card-body">
                    <h5 className="card-title">
                      Total Employee
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people" />
                      </div>
                      <div className="ps-3">
                        <h6>1244</h6>
                        <span className="text-danger small pt-1 fw-bold">
                          12%
                        </span>{" "}
                        <span className="text-muted small pt-2 ps-1">decrease</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             
             
              {/* End Top Selling */}
            </div>
          </div>
          {/* End Left side columns */}
          {/* Right side columns */}
          <div className="col-lg-4">
            {/* Recent Activity */}
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Recent Activity <span>| Today</span>
                </h5>
                <div className="activity">
                  <div className="activity-item d-flex">
                    <div className="activite-label">32 min</div>
                    <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                    <div className="activity-content">
                      Quia quae rerum{" "}
                      <a href="#" className="fw-bold text-dark">
                        explicabo officiis
                      </a>{" "}
                      beatae
                    </div>
                  </div>
                  {/* End activity item*/}
                  <div className="activity-item d-flex">
                    <div className="activite-label">56 min</div>
                    <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                    <div className="activity-content">
                      Voluptatem blanditiis blanditiis eveniet
                    </div>
                  </div>
                  {/* End activity item*/}
                  <div className="activity-item d-flex">
                    <div className="activite-label">2 hrs</div>
                    <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                    <div className="activity-content">
                      Voluptates corrupti molestias voluptatem
                    </div>
                  </div>
                  {/* End activity item*/}
                  <div className="activity-item d-flex">
                    <div className="activite-label">1 day</div>
                    <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                    <div className="activity-content">
                      Tempore autem saepe{" "}
                      <a href="#" className="fw-bold text-dark">
                        occaecati voluptatem
                      </a>{" "}
                      tempore
                    </div>
                  </div>
                  {/* End activity item*/}
                  <div className="activity-item d-flex">
                    <div className="activite-label">2 days</div>
                    <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                    <div className="activity-content">
                      Est sit eum reiciendis exercitationem
                    </div>
                  </div>
                  {/* End activity item*/}
                  <div className="activity-item d-flex">
                    <div className="activite-label">4 weeks</div>
                    <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                    <div className="activity-content">
                      Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                    </div>
                  </div>
                  {/* End activity item*/}
                </div>
              </div>
            </div>
            {/* End Recent Activity */}
            {/* Budget Report */}
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body pb-0">
                <h5 className="card-title">
                  Budget Report <span>| This Month</span>
                </h5>
                <div
                  id="budgetChart"
                  style={{ minHeight: 400 }}
                  className="echart"
                />
              </div>
            </div>


          </div>
          {/* End Right side columns */}
        </div>
      </section>


    </>
  );
}

export default Dashboard;