import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer-v8">
      <footer className="copyright">
        <div className="container">

          <ul className="terms-menu">

            <li>2019 &copy; All Rights Reserved.</li>

            <li>
              <Link href="/terms-conditions">
                Terms of Use
              </Link>
            </li>

            <li>
              <Link href="/privacy-policy">
                Privacy and Policy
              </Link>
            </li>

            <li className="pull-right home">

              <span>Powered by </span>

              <Link href="/">
                <Image
                  className="printlogo"
                  src="https://computervignanam.net/assets/img/cvnewlogo2.png"
                  alt="CV"
                  width={80}
                  height={30}
                  unoptimized
                  style={{ height: "auto" }}
                />
              </Link>

            </li>

          </ul>

        </div>
      </footer>
    </div>
  );
}