import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/product");
  };
  return (
    <>
      <h1>Halaman Login</h1>
      <button
        onClick={() => {
          handleLogin;
        }}
      >
        Login
      </button>
      <p>
        Belum punya akun? Registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </>
  );
};

export default LoginPage;
