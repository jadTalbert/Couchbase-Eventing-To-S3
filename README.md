# Couchbase-Eventing-To-S3

function OnUpdate(doc, meta) {
            
    var request = {
        path: "/beta/test-pru-copy/" + meta.id + ".json",
        body: doc,
        headers: {
        "Content-Type": "application/json"
        }
    };
    var s3 = s3URI;
    log("s3 url->");
    log(s3);
    log("request variable->");
    log(request);
    
    var response = curl("PUT", s3URI, request);
    log("response object->")
    log(response);
    if(response.status != 200) {
        log("exception found->")
        exceptionBucket[meta.id] = doc;
        
    }

}

function OnDelete(meta, options) {
    log("Doc deleted/expired", meta.id);
}
