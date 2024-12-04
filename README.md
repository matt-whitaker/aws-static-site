# aws-static-site

A collection of scripts and workflows (Github Actions) manage a AWS-based static assets.

## deploy-static-site

Simple workflow job which deploys a static site to S3, and invalidates the associated Cloudfront distribution to flush the new assets

### Usage

Define your job using the module
```
  Deploy:
    needs: [ "Build" ]
    uses: matt-whitaker/aws-static-site/.github/workflows/deploy-static-site.yaml@mainline
    with:
      environment: "prod"
      aws_default_region: "us-west-2"
      artifact_name: "build"
      artifact_path: "path/to/artifact"
    secrets:
      aws_access_key_id: ${{ secrets.AWS_ACCESS_KEY_ID }}
      aws_secret_access_key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
      aws_role_to_assume: ${{ secrets.AWS_ROLE_TO_ASSUME }}
      aws_s3_bucket: ${{ secrets.AWS_S3_BUCKET }}
      aws_cloudfront_distribution_id: ${{ secrets.AWS_CLOUDFRONT_DISTRIBUTION_ID }}
```
