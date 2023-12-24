import { Outlet, redirect } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";

export default function Root() {

  // Check if login
  if ("hehe" === "what"){
    return <>
      <h1>Not authenticated</h1>
    </>
  }

  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout >
    </>
  )
}
