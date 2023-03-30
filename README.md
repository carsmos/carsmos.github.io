# This is the draft webpage for CARSMOS.AI

https://www.carsmos.ai/

# How to make changes to the Carsmos jekyll site

https://hackmd.io/@dspfac/rJjfDXzci

# Special note for running/testing Jekyll themes locally on MacOS machine

The Ruby version preloaded in MacOS is v2.x, too low to run Jekyll.
The latest Ruby version 3.2.x is too high to Jekyll as well, with compaibility issues.
The best Ruby version to run Jekyll on your Mac is v3.1.x, e.g. 3.1.3.

Please check:

https://jekyllrb.com/docs/installation/macos/

https://github.com/jekyll/jekyll/issues/9233

---



# The following About the Chinese carsmos 

> Remarks:_data_zh_cn folder and _posts_zh_cn only to store Chinese data,Chinese official website (www.carsmos.cn) build used

## chinese carsmos  deployment steps as:

1. install ossutil

   ``` bash
   sudo -v ; curl https://gosspublic.alicdn.com/ossutil/install.sh | sudo bash  
   ```

   ```bash
   ossutil config 
   ```

   > Enter the Endpoint, AccessKey ID, AccessKey Secret, and STSToken parameters according to the prompt information             

   ```bash
   ossutil ls
   ```

   >If you see the bucketName list, you succeeded

   > install ossutil detail,you can refer:`https://help.aliyun.com/document_detail/120075.html`

2. execute zh_cn_build.sh script file

   >Enter the project root directory,and execute command

   ```bash
   sh zh_cn_build.sh
   ```

   

   



