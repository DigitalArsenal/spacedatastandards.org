<h2>
  Background
</h2>
<p>
  The
  <a href='https://public.ccsds.org/default.aspx'>
    Consultative Committee for Space Data Systems (CCSDS)
  </a>
  '...is a multi-national forum for the development of communications and
  data systems standards for spaceflight'.
</p>
<p>
  Founded in 1982, CCSDS has been publishing
  <a href='https://public.ccsds.org/Publications/BlueBooks.aspx'>
    Recommended Standards (called 'Blue Books')
  </a>
  to help standardize space messaging formats.
</p>
<p>
  In 2010, CCSDS published an
  <a href='https://public.ccsds.org/Pubs/505x0b1.pdf'>
    XML SPECIFICATION FOR NAVIGATION DATA MESSAGES
  </a>
  to aid developers in creating web services based on CCSDS standards, using
  <a href='https://en.wikipedia.org/wiki/XML'>eXtensible Markup Language</a>
  as the
  <a href='https://en.wikipedia.org/wiki/Serialization'>
    serialization format
  </a>
  , which is a format that allows transferring data between computers.
</p>
<p>
  To transfer messages networks, the data is converted in a text-based
  format using tags which look like
  <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
    HyperText Markup Language (HTML)
  </a>
  , the basic format of the world wide web.
</p>
<p>
  However, XML is
  <a href='https://en.wikipedia.org/wiki/Comparison_of_data-serialization_formats'>
    not the only way
  </a>
  to transmit messages between computers. Most modern systems use other
  formats that consume less bandwidth, less memory, and require less
  computational resources to use inside applications. Some do not even
  require a conversion step and can write the messages directly into memory!
  Here are some examples:
</p>
<div>
  <ul>
    <li>
      <a href='https://tools.ietf.org/html/rfc8259' rel='nofollow'>
        JavaScript Object Notation (JSON)
      </a>
    </li>
    <li>
      <a href='https://tools.ietf.org/html/rfc4180' rel='nofollow'>
        Comma Seperated Values (CSV)
      </a>
    </li>
    <li>
      <a href='http://bsonspec.org/spec.html' rel='nofollow'>
        Binary JSON (BSON)
      </a>
    </li>
    <li>
      <a href='https://google.github.io/flatbuffers/' rel='nofollow'>
        Google Flatbuffers
      </a>
    </li>
    <li>
      <a href='https://avro.apache.org/docs/current/' rel='nofollow'>
        Apache Avro
      </a>
    </li>
  </ul>
</div>
<p>
  The goal of this site is to add additional formatting options for CCSDS
  messages, as well as aid developers by generating code for use in
  applications. 
</p>
<p>
  For more information contact me at
  <a href='mailto:tj@digitalarsenal.io'>tj@digitalarsenal.io</a>
  , or
  <a href='https://github.com/DigitalArsenal/spacedatastandards.org/issues'>
    open an issue
  </a>
  on this repository.
</p>