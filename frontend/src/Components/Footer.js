import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

export default function Footer() {
	return (
		<div>
			<footer className="text-center text-lg-start bg-light text-muted">
				<section>
					<div className="container text-center text-md-start mt-5">
						<div className="row mt-3">
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">
									Báo điện tử VnExpress
								</h6>
							</div>

							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								<p>
									<Link to="#" className="text-reset">
										Trang chủ
									</Link>
								</p>
								<p>
									<Link to="#" className="text-reset">
										Video
									</Link>
								</p>
								<p>
									<Link to="#" className="text-reset">
										Podcast
									</Link>
								</p>
								<p>
									<Link to="#" className="text-reset">
										Ảnh
									</Link>
								</p>
								<p>
									<Link to="#" className="text-reset">
										Infographics
									</Link>
								</p>
							</div>

							<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
								{data.category
									.slice(0, data.category.length / 2)
									.map((cate) => (
										<p>
											<Link to="#" className="text-reset">
												{cate.name}
											</Link>
										</p>
									))}
							</div>
							<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
								{data.category
									.slice(data.category.length / 2, data.category.length)
									.map((cate) => (
										<p>
											<Link to="#" className="text-reset">
												{cate.name}
											</Link>
										</p>
									))}
							</div>

							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
								<p>
									<i className="fas fa-home me-3"></i> Tòa soạn
								</p>
								<p>
									<i className="fas fa-envelope me-3"></i>
									info@example.com
								</p>
								<p>
									<i className="fas fa-phone me-3"></i> 083.888.0123 (Hà Nội)
								</p>
								<p>
									<i className="fas fa-phone me-3"></i> 082.233.3555 (TP.Hồ Chí
									Minh)
								</p>
							</div>
						</div>
					</div>
				</section>

				<div className="text-center p-4">
					© 1997-2022. Toàn bộ bản quyền thuộc VnExpress
				</div>
			</footer>
		</div>
	);
}
