import React from "react";
import Link from "next/link";

export default () => (
  <div>
    <h1 className={styles.heading}>You can't see this!</h1>
    <p className={styles.content}>
      You're not authenticated yet. Maybe you want to{" "}
      <Link href="/auth/sign-in"><a className={styles.link}>sign in</a></Link>
      {" "}and see what happens?
    </p>
  </div>
);
