function OnUpdate(doc, meta) {
    /*set up the request object for the HTTPS request to S3*/
    var request = {
        path: "/beta/test-pru-copy/" + meta.id + ".json", /*S3 bucket path*/
        body: doc,
        headers: {
        "Content-Type": "application/json"
        }
    };
    var s3 = s3URI; /*configured in your eventing settings*/
    log("s3 url->");
    log(s3);
    log("request variable->");
    log(request);

    /*curl to S3 bucket*/
    var response = curl("PUT", s3URI, request);
    log("response object->")
    log(response);
    /*if a good response is returned from the S3 call*/
    if(response.status != 200) {
        log("exception found->")
        exceptionBucket[meta.id] = doc;

    }
}
