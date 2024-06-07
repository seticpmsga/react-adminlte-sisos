
function Home() {
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
                                    <li className="breadcrumb-item active">Dashboard v1</li>
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
                                
                                {/* Custom tabs (Charts with tabs)*/}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            <i className="fas fa-chart-pie mr-1" />
                                            Sales
                                        </h3>
                                        <div className="card-tools">
                                            <ul className="nav nav-pills ml-auto">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>{/* /.card-header */}

                                    <div className="card-body">
                                        <div className="tab-content p-0">
                                            {/* Morris chart - Sales */}
                                            <div className="chart tab-pane active" id="revenue-chart" style={{ position: 'relative', height: 300 }}>
                                                <canvas id="revenue-chart-canvas" height={300} style={{ height: 300 }} />
                                            </div>
                                            <div className="chart tab-pane" id="sales-chart" style={{ position: 'relative', height: 300 }}>
                                                <canvas id="sales-chart-canvas" height={300} style={{ height: 300 }} />
                                            </div>
                                        </div>
                                    </div>{/* /.card-body */}
                                </div>
                                {/* /.card (Charts with tabs)*/}

                            </section>
                            {/* /.Left col */}

                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section className="col-lg-5 connectedSortable">

                                {/* Calendar */}
                                <div className="card bg-gradient-success">
                                    <div className="card-header border-0">
                                        <h3 className="card-title">
                                            <i className="far fa-calendar-alt" />
                                            Calendar
                                        </h3>
                                        {/* tools card */}
                                        <div className="card-tools">
                                            {/* button with a dropdown */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" data-offset={-52}>
                                                    <i className="fas fa-bars" />
                                                </button>
                                                <div className="dropdown-menu" role="menu">
                                                    <a href="#" className="dropdown-item">Add new event</a>
                                                    <a href="#" className="dropdown-item">Clear events</a>
                                                    <div className="dropdown-divider" />
                                                    <a href="#" className="dropdown-item">View calendar</a>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
                                                <i className="fas fa-minus" />
                                            </button>
                                            <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
                                                <i className="fas fa-times" />
                                            </button>
                                        </div>
                                        {/* /. tools */}
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body pt-0">
                                        {/*The calendar */}
                                        <div id="calendar" style={{ width: '100%' }} />
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}

                                {/* Map card */}
                                <div className="card bg-gradient-primary">
                                    <div className="card-header border-0">
                                        <h3 className="card-title">
                                            <i className="fas fa-map-marker-alt mr-1" />
                                            Visitors
                                        </h3>
                                        {/* card tools */}
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-primary btn-sm daterange" title="Date range">
                                                <i className="far fa-calendar-alt" />
                                            </button>
                                            <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus" />
                                            </button>
                                        </div>
                                        {/* /.card-tools */}
                                    </div>
                                    <div className="card-body">
                                        <div id="world-map" style={{ height: 250, width: '100%' }} />
                                    </div>
                                    {/* /.card-body*/}
                                    <div className="card-footer bg-transparent">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <div id="sparkline-1" />
                                                <div className="text-white">Visitors</div>
                                            </div>
                                            {/* ./col */}
                                            <div className="col-4 text-center">
                                                <div id="sparkline-2" />
                                                <div className="text-white">Online</div>
                                            </div>
                                            {/* ./col */}
                                            <div className="col-4 text-center">
                                                <div id="sparkline-3" />
                                                <div className="text-white">Sales</div>
                                            </div>
                                            {/* ./col */}
                                        </div>
                                        {/* /.row */}
                                    </div>
                                </div>
                                {/* /.card */}

                                {/* solid sales graph */}
                                <div className="card bg-gradient-info">
                                    <div className="card-header border-0">
                                        <h3 className="card-title">
                                            <i className="fas fa-th mr-1" />
                                            Sales Graph
                                        </h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                                                <i className="fas fa-minus" />
                                            </button>
                                            <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                                                <i className="fas fa-times" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <canvas className="chart" id="line-chart" style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }} />
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer bg-transparent">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <input type="text" className="knob" data-readonly="true" defaultValue={20} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                                                <div className="text-white">Mail-Orders</div>
                                            </div>
                                            {/* ./col */}
                                            <div className="col-4 text-center">
                                                <input type="text" className="knob" data-readonly="true" defaultValue={50} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                                                <div className="text-white">Online</div>
                                            </div>
                                            {/* ./col */}
                                            <div className="col-4 text-center">
                                                <input type="text" className="knob" data-readonly="true" defaultValue={30} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                                                <div className="text-white">In-Store</div>
                                            </div>
                                            {/* ./col */}
                                        </div>
                                        {/* /.row */}
                                    </div>
                                    {/* /.card-footer */}
                                </div>
                                {/* /.card */}
                                
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

export default Home;

