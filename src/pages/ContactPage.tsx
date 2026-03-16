export function ContactPage() {
  return (
    <div className="container prose">
      <h1 className="h1">Resources</h1>
      <p className="lede">
        If you want to talk or get more information about the
        gospel, you can text {" "}
        <a href="sms:+15109826447">(510) 982-6447</a> with any questions.
      </p>

      <h2 className="h2">Find a church</h2>
      <p>
        If you’re looking for a healthy local church, The Master’s Seminary has
        a directory that helps you locate churches with TMS alumni around the
        world (often including pastor/teacher, website, and contact info). You
        can use it here:{" "}
        <a
          href="https://tms.edu/find-a-church/"
          target="_blank"
          rel="noreferrer"
        >
          TMS Church Finder
        </a>
        .
      </p>

      <div className="row gap" style={{ marginTop: 12 }}>
        <a
          className="button"
          href="https://tms.edu/find-a-church/"
          target="_blank"
          rel="noreferrer"
        >
          Open TMS Church Finder →
        </a>
      </div>
    </div>
  );
}


