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

## 🚀 CloudMart Project Overview

### 🌐 Web App Interface
![Web UI](https://github.com/user-attachments/assets/4d493aec-0bde-4390-ae64-5fbb9d191e00)

### 📊 Product Catalog View
![Catalog Screenshot](https://github.com/user-attachments/assets/66914284-6e9f-487c-8114-eb0c36593fd6)

### 🛒 AI-powered Product Suggestion
![AI Suggestion](https://github.com/user-attachments/assets/4e582698-10a5-46ef-b632-d3a9afb77a35)





