import React from "react";
import PropTypes from "prop-types";
import "../style/componentStyle/home.css";

import image1 from "../style/image/image.jpg";
import image2 from "../style/image/image2.jpg";
import { useHistory } from "react-router-dom";

const Home = () => {
	const history = useHistory();
	return (
		<div className="container-fluid">
			<div className="header">
				<h2 className="text-center pt-5 pb-4">Chi tiet san pham</h2>
			</div>
			<div className="col-sm-6 mx-auto card d-flex">
				<div id="sliderImage" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src={image1} class="d-block" alt="..." />
						</div>
						<div class="carousel-item">
							<img src={image2} class="d-block" alt="..." />
						</div>
					</div>
					<a
						class="carousel-control-prev"
						href="#sliderImage"
						role="button"
						data-slide="prev"
					>
						<span
							class="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span class="sr-only">Previous</span>
					</a>
					<a
						class="carousel-control-next"
						href="#sliderImage"
						role="button"
						data-slide="next"
					>
						<span
							class="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
				<div className="product-info">
					<h5 className="card-title">Kem chong lao hoa 22again</h5>
					<h6 id="price">1.580.000 vnd</h6>
					<h5 id="current-price">750.000 vnd</h5>
					<button
						onClick={() => history.push("/product")}
						className="btn btn-default"
					>
						Mua ngay
					</button>
				</div>
				<div className="card-body">
					<div className="ingre">
						<h5>Thanh Phan</h5>
						<p>
							collagen thủy phân - tinh dầu jojoba - dầu hạt nho - một số
							thành phần dưỡng chất khác
						</p>
						<h5>Nguon goc</h5>
						<p>
							-22 Again là thương hiệu kem chống lão hóa được sản xuất
							dựa trên công nghệ tiến tiến nhất của Hàn Quốc. Nhà máy sản
							xuất 22 Again được xây dựng theo chuẩn C-GMP, chuẩn chất
							lượng sản xuất mỹ phẩm của KFDA, Hàn Quốc....
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
