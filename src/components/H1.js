import "./../styles/H1.css";

export function H1(props) {
  return (
    <h1 className={`heading-one ${props.className}`} id={props.markup}>
      <a
        className={props.markup}
        dangerouslySetInnerHTML={{ __html: props.markup }}
        href={`#${props.markup}`}
      ></a>
    </h1>
  );
}

export function H2(props) {
  return (
    <>
      <h2 className={`heading-one ${props.className}`} id={props.markup}>
        <a
          className={props.markup}
          dangerouslySetInnerHTML={{ __html: props.markup }}
          href={`#${props.markup}`}
        ></a>
      </h2>
    </>
  );
}

export function H3(props) {
  return (
    <>
      <h3 className={`heading-one ${props.className}`} id={props.markup}>
        <a
          className={props.markup}
          dangerouslySetInnerHTML={{ __html: props.markup }}
          href={`#${props.markup}`}
        ></a>
      </h3>
    </>
  );
}

export function H4(props) {
  return (
    <>
      <h4 className={`heading-one ${props.className}`} id={props.markup}>
        <a
          className={props.markup}
          dangerouslySetInnerHTML={{ __html: props.markup }}
          href={`#${props.markup}`}
        ></a>
      </h4>
    </>
  );
}

export function H5(props) {
  return (
    <>
      <h5 className={`heading-one ${props.className}`} id={props.markup}>
        <a
          className={props.markup}
          dangerouslySetInnerHTML={{ __html: props.markup }}
          href={`#${props.markup}`}
        ></a>
      </h5>
    </>
  );
}

export function H6(props) {
  return (
    <>
      <h6 className={`heading-one ${props.className}`} id={props.markup}>
        <a
          className={props.markup}
          dangerouslySetInnerHTML={{ __html: props.markup }}
          href={`#${props.markup}`}
        ></a>
      </h6>
    </>
  );
}
