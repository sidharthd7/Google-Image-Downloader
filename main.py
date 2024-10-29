import argparse
import os
from src.download_images import crawl_images
from src.sendEmail import send_email
from src.zip import zip_folder

if __name__== "__main__":
    parser = argparse.ArgumentParser(description="Crawl images from the web based on a keyword.")
    
    parser.add_argument("--keyword", required=True, help="keyword for search")
    parser.add_argument("--count", required=True, type=int, help="Count of Images")
    parser.add_argument("--email", required=True, help="Recipient email to send results")
    
    args = parser.parse_args()
    
    output_file = "data/downloaded_images"
    
    if not os.path.exists(output_file):
        os.makedirs(output_file)
    
    crawl_images(args.keyword, args.count, output_file)
    
    output_zip = "data/output_file.zip"
    zip_folder(output_file, output_zip)
    
    if os.path.exists(output_file):
        send_email(output_zip, args.email)
    else:
        print(f"File not found: {output_file}. Cannot send email.")