import React from 'react'

export default function ProductList() {
    return (
        <div className="d-flex gap-10 justify-center flex-wrap m-16 ml-48 mr-48">
            <div className="card " style={{ width: "18rem" }}>
                <img
                    src="https://www.invert.vn/media/uploads/uploads/2022/12/03195137-21.jpeg"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">Product 1</h5>
                    <p className="card-text">
                        $30.00
                    </p>
                    <a href="#" className="btn btn-primary w-100">
                        Thêm Giỏ Hàng{" "}
                    </a>
                </div>
            </div>
            <div className="card " style={{ width: "18rem" }}>
                <img
                    src="https://www.invert.vn/media/uploads/uploads/2022/12/03195137-21.jpeg"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">Product 2</h5>
                    <p className="card-text">
                        $10.00
                    </p>
                    <a href="#" className="btn btn-primary w-100">
                        Thêm Giỏ Hàng{" "}
                    </a>
                </div>
            </div>
        </div>
    )
}