# 🛒 CloudMart — Multicloud DevOps AI Retail Platform

CloudMart is a cloud-native, AI-powered e-commerce platform built as part of the **Multicloud DevOps AI Challenge**. This project demonstrates how intelligent automation, scalable infrastructure, and cross-cloud integration can power modern applications.

---

## 🚀 Tech Stack

| Layer                | Tools & Services                                             |
|---------------------|--------------------------------------------------------------|
| **Cloud Providers** | AWS, GCP                                                     |
| **Frontend**        | React + Vite (Deployed on EKS)                               |
| **Backend**         | Node.js Lambda functions (API Gateway + Bedrock integration) |
| **AI & LLM**        | Amazon Bedrock (Agent + Action Group + Lambda)               |
| **Data**            | DynamoDB (Products), GCP BigQuery (Orders)                   |
| **DevOps**          | Terraform, GitHub Actions, AWS CodePipeline + CodeBuild      |
| **Monitoring**      | CloudWatch Logs, EKS Rollouts, GitHub Secret Scanning        |

---

## 🧠 Features

- 🔍 **AI Recommendations** using Amazon Bedrock Agents and Lambda Function calling
- 📦 **Product Catalog** stored in DynamoDB
- 🧾 **Order Data Streaming** from AWS Lambda to Google BigQuery
- 🚀 **CI/CD Pipeline** using AWS CodePipeline, CodeBuild, and GitHub
- 🌐 **Multicloud Interop**: AWS for core infrastructure + GCP BigQuery for analytics
- 🔒 **Secret Protection** with GitHub Push Protection & IAM roles

---

## 🛠️ Project Structure

```bash
cloudmart-app/
├── backend/                      # Main Lambda backend (Node.js)
│   └── src/lambda/
│       └── addToBigQuery/       # Lambda function to stream to BigQuery
├── frontend/                    # React frontend
├── terraform-project/           # AWS Infrastructure as Code
├── .gitignore
└── README.md

⚙️ Deployment Workflow

Backend Lambda (addToBigQuery) reads order data and streams it to GCP BigQuery
Amazon Bedrock Agent calls Lambda (Action Group) to retrieve product recommendations
Frontend React App is deployed on Amazon EKS using Kubernetes manifests
CI/CD via GitHub → AWS CodePipeline → CodeBuild → EKS
Secrets Managed via IAM roles, .gitignore, and GitHub Secret Scanning

🧪 AI Use Case: Product Recommendation Agent

Agent hosted in Amazon Bedrock
System prompt defines behavior for a CloudMart sales assistant
Agent calls /products API via Lambda using OpenAPI-based Action Group
Recommendations are generated dynamically based on customer query

🗂️ Multicloud Integration

✅ AWS Lambda: executes logic and inserts into BigQuery
✅ GCP BigQuery: stores order records for analytics
✅ Service Account with roles/bigquery.dataEditor used securely
✅ Terraform manages IAM roles, Lambda, EKS, and Bedrock setup





### 🛒 AI-powered Product Suggestion
![AI Suggestion](https://private-user-images.githubusercontent.com/35989016/428577932-15d8c81c-de63-40cb-b3be-f869cc6debf1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM0MTcyMjQsIm5iZiI6MTc0MzQxNjkyNCwicGF0aCI6Ii8zNTk4OTAxNi80Mjg1Nzc5MzItMTVkOGM4MWMtZGU2My00MGNiLWIzYmUtZjg2OWNjNmRlYmYxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzMxVDEwMjg0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVjYWI5Y2UwYzgxNjRjODM1MWIzODg2ZGU5MTVlNGRmNzI0ODRmY2U0YzlhZWJhMDRlMWVkYmY0MjVlOTMzNzQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.t_i0BOSqK9AaDYTCay7UXGpGBToUEw-Aoe_Lm4zBK5c)

