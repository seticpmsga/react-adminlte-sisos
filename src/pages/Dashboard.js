
function Dashboard() {
    return (
        <div>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">

                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}

                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        
                        {/* Small boxes (Stat box) - [New Orders, Bounce Rate, User Registrations, Unique Visitors]*/}
                        <div className="row">
                            
                            <div className="col-lg-4 col-8">
                                {/* small box */}
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>65</h3>
                                        <p>Unique Visitors</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}                            

                            <div className="col-lg-4 col-8">
                                {/* small box */}
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>44</h3>
                                        <p>User Registrations</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}

                            <div className="col-lg-4 col-8">
                                {/* small box */}
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                                        <p>Bounce Rate</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}

                        </div>
                        {/* /.row */}

                        {/* Main row */}
                        <div className="row">

                            {/* Left col */}
                            <section className="col-lg-7 connectedSortable">
                                
                                <h1>GRÁFICO 1</h1>

                            </section>
                            {/* /.Left col */}

                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section className="col-lg-5 connectedSortable">

                                <h1>GRÁFICO 2</h1>
                                
                            </section>
                            {/* right col */}
                            
                        </div>
                        {/* /.row (main row) */}

                    </div>{/* /.container-fluid */}

                </section>
                {/* /.content */}

            </div>

        </div>
    );
}

export default Dashboard;

