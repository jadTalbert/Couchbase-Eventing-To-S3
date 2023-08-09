# About this repository
###### This simple eventing function is written as a working example of how to ensure mutations from your Couchbase bucket(s) are copied to an AWS S3 bucket.

# How To
##### For this eventing function to work properly, you must create an AWS S3 bucket in your account. Keep in mind, that you will have to set the appropriate permissions on your bucket that adhere to you specific security needs. We will no make any recommendations on security best practices, as this is dependent on your environment and business requirements.

##### Step1: Create an S3 bucket in your AWS account

##### Step 2: Configure your S3 access to allow the eventing function to communicate with S3

##### Step 3: Configure your eventing function in your Couchbase cluster. The settings for your function will be dependent on your needs, so no formal recommendations are made here.

##### Step 4: Copy this eventing function into your Eventing node on your Couchbase cluster and save the function---do NOT deploy it yet!

##### Step 5: Modify the ```path``` key in the ```request``` object to point to your S3 bucket path

##### Step 6: Deploy your Eventing function and either create a new document in your bucket or modify an existing document. Once the mutation is complete, check your S3 bucket to ensure the document was written to S3.
   - Note: the most common issue that we have seen, is around S3 bucket permissions. So, if your documents are not being written as expected, double check your permissions.
