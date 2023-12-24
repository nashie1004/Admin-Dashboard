import { Outlet, redirect } from "react-router-dom";
import MainLayout from "./MainLayout";

export default function Root() {

  // Check if login
  if ("hehe" === "what"){
    return <>
      <h1>Not authenticated</h1>
    </>
  }

  return (
    <div>
      <MainLayout>
        <Outlet />
      </MainLayout >
    </div>
  )
}
