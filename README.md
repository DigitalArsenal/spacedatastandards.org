# spacedatastandards.org

Data Standards For Space Data Systems

**Background**
---

The [Consultative Committee for Space Data Systems (CCSDS)](https://public.ccsds.org/default.aspx) "...is a multi-national forum for the development of communications and data systems standards for spaceflight".

Founded in 1982, CCSDS has been publishing [Recommended Standards (called 'Blue Books')](https://public.ccsds.org/Publications/BlueBooks.aspx) to help standardize space messaging formats.

In 2010, CCSDS published an [XML SPECIFICATION FOR NAVIGATION DATA MESSAGES](https://public.ccsds.org/Pubs/505x0b1.pdf) to aid developers in creating web services based on CCSDS standards, using [eXtensible Markup Language](https://en.wikipedia.org/wiki/XML) as the [serialization format](https://en.wikipedia.org/wiki/Serialization).  

This means that, to transfer messages between computers over networks, the data elements are converted in a text-based format using tags which look like [HyperText Markup Language (HTML)](https://developer.mozilla.org/en-US/docs/Web/HTML), the basic format of the world wide web.

However, XML is [not the only way](https://en.wikipedia.org/wiki/Comparison_of_data-serialization_formats) to transmit messages between computers. Most modern systems use other formats that consume less bandwidth, less memory, and require less computational resources to use inside applications. Some do not even require a conversion step and can write the messages directly into memory!

- [JavaScript Object Notation (JSON)](https://tools.ietf.org/html/rfc8259)
- [Comma Seperated Values (CSV)](https://tools.ietf.org/html/rfc4180)
- [Binary JSON (BSON)](http://bsonspec.org/spec.html)
- [Google Flatbuffers](https://google.github.io/flatbuffers/)
- [Apache Avro](https://avro.apache.org/docs/current/)

The goal of this site is to add additional formatting options for CCSDS messages, as well as aid developers by generating code for use in applications.

For more information contact me at <tj@digitalarsenal.io>, or [open an issue](https://github.com/DigitalArsenal/spacedatastandards.org/issues) on this repository.
