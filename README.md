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


```

### 🛒 AI-powered Product Suggestion
![AI Suggestion](https://raw.githubusercontent.com/tarakgit/cloudmart/main/images/AI-Powered%20Product%20Recommendation%20Panel.png)

### 💬 AI-Powered Customer Support Chat
This interface handles customer support queries using a conversational agent. Users can cancel orders or get updates — powered by Bedrock + Lambda + Order DB.

![AI Support Chat](https://raw.githubusercontent.com/tarakgit/cloudmart/main/images/AI-Powered%20Customer%20Support%20Chat.png)

### 📦 Orders Page
The “My Orders” page shows order status with real-time updates. Cancelled and pending orders are listed with unique order IDs and action buttons.

![My Orders Page](https://raw.githubusercontent.com/tarakgit/cloudmart/main/images/Ordersupdate.png)

### 🧠 AI-Powered Sentiment Analysis (Azure)
This feature leverages **Microsoft Azure AI Language Service** to analyze user emotions during support conversations. Based on the sentiment (positive, neutral, negative), the AI adjusts its tone and response.

![Sentiment Analysis](https://raw.githubusercontent.com/tarakgit/cloudmart/main/images/Sentiment%20Analysis%20usingAzure%20Language.png)


