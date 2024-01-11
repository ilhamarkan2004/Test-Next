import Link from "next/link";

const RegisterPage = () => {
  return (
    <>
      <h1>Halaman register</h1>
      <p>
        Sudah punya akun? Login <Link href={"/auth/login"}>disini</Link>
      </p>
    </>
  );
};

export default RegisterPage;
