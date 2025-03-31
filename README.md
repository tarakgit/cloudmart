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
