import "./FooterAtom.scss";

export const FooterAtom = () => {
	return (
		<div className="footer">
			<div className="footer__list-container">
				<ul className="footer__list">
					<li className="footer__list-item">About</li>
					<li className="footer__list-item">About</li>
					<li className="footer__list-item">Contact us</li>
					<li className="footer__list-item">FAQ</li>
				</ul>
				<ul className="footer__list">
					<li className="footer__list-item">Social media</li>
					<li className="footer__list-item">Follow on Instagram</li>
					<li className="footer__list-item">Follow on Facebook</li>
					<li className="footer__list-item">Follow on Twitter</li>
				</ul>
			</div>
			<p className="footer__meta">Test app for IriusRisk</p>
		</div>
	);
};
