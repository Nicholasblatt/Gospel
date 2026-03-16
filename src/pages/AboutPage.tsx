export function AboutPage() {
  return (
    <div className="container prose">
      <h1 className="h1">About</h1>
      <p className="lede">
        This site exists to share the gospel clearly and help people take their
        next step toward faith in Jesus Christ.
      </p>

      <h2 className="h2">Purpose</h2>
      <p>
        My aim is simple: present the message of Jesus in a straightforward way,
        answer common questions, and equip people to move from curiosity to real
        faith - repenting and believing the gospel. I'm not affiliated with any
        church, and this site is not a church. I encourage any new believer to
        find a local church to belong to and to sit under preaching and receive
        pastoral care.
      </p>

      <h2 className="h2">Resources</h2>
      <p>
        If you want to talk or get more information about the gospel, you can
        text <a href="sms:+15109826447">(510) 982-6447</a> with any questions.
      </p>

      <h3 className="h2">Find a church</h3>
      <p>
        If you’re looking for a healthy local church, The Master’s Seminary has
        a directory that helps you locate churches with TMS alumni around the
        world, often including pastor or teacher, website, and contact
        information. You can use it here:{" "}
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
