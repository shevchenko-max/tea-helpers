## Digital Ocean Kubernetes Environment: DEV and STAGE

This document outlines the configuration and architecture of the DEV and STAGE environments hosted on Digital Ocean. The setup utilizes Continuous Integration and Continuous Delivery practices with a combination of several Digital Ocean services and Kubernetes resources.

### Services and Technologies Used

-   Digital Ocean Kubernetes (DOKS): Manages the containerized applications across multiple compute ins tances, ensuring high availability and scalability.
    
-   Container Registry: Stores Docker container images, ensuring secure storage and efficient access for deployment. ( 5 Gb )
    
-   Network and Firewall: Configures network settings and security rules to protect resources within the cloud environment.
    
-   Load Balancers: Provides an entry point to the Kubernetes clusters, ensuring traffic distribution across multiple instances for load balancing and fault tolerance.
    
-   Spaces Object Storage: Utilized for storing backups of databases and collected image data, providing durability and high availability.
    

### CI/CD Implementation

-   Continuous Integration/Continuous Delivery: Automated pipelines are implemented using ArgoCD, facilitating smooth and reliable code deployments to the Kubernetes clusters directly from version control systems.
    

### Kubernetes Configuration

#### Namespaces and Applications

-   argocd: Hosts the ArgoCD application for managing Kubernetes resources via GitOps.
    
-   b2b: Contains the B2B web application.
    
-   back: Comprises II app and Redis (KeyDB) for caching and data management.
    
-   front-web: Includes the frontend components of the web application.
    
-   ingress-nginx: Manages ingress resources using NGINX as the ingress controller for routing traffic.
    
-   prometheus: Dedicated to monitoring with Prometheus and Grafana.
    
-   kube-node-lease, kube-public, kube-system: Reserved for system-related Kubernetes operations and should not contain application-specific resources.
    

#### Load Balancer Configuration

Each service requiring external access is paired with a dedicated Load Balancer (LB), ensuring that traffic is appropriately routed and handled.

#### Network Policies

-   Backend Namespace: Configured with a network policy that allows connections from all namespaces within the Kubernetes cluster, ensuring inter-service communication and data exchange.
    

### Ingress Management

Ingress resources are managed by the NGINX ingress controller, which is responsible for routing external requests to the appropriate services within the cluster.

#### Annotations

-   nginx-proxy-server: Serves as a proxy layer between users and the web application, specifically managing traffic and interactions with the Redis database.
    

### High-Level Infrastructure Overview

The Kubernetes cluster is segmented into three primary namespaces corresponding to the major applications: b2b, backend, and front-web. Each namespace is designed to encapsulate its respective components, thereby streamlining management and isolation of different application environments.

List of services:

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcjGtPt6OcBGpc2k9qJCGbLDnXh-OzDA640ZcK-5xoGb5AqwoSDmIXrrrsVoMSCdyPjGfADEkcAzMtosNlmowckyHiELOb0AnABREAGCh72U7oz7t6LxbxcoIs6g138Vz7M6RaW1beWwnUHHUj2J8FZfJt4?key=XWGfBjX1cX-o6y78AsuHcg)

  
  
  

List of Ingress:  
![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdmEqs__GzDtyOouArhsmU98ZsXNNg9AIXzRF6K8NT6NfsMXnl-76Ybfxwpi_8rQeRgNdyP12oaTbnbu5hNHNY2Jb32K0a6waJMItX50lDVZbNuVg_p6IGlstYQ9isOXC07h77o0udVx9vp4l6MkcB7InWT?key=XWGfBjX1cX-o6y78AsuHcg)

  
  

Schema of k8s objects ( II, Web, B2B-Web ):

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXeFtwFOWHn4UkFzlnpsIIAKB-5oFLLz5o2GmkwUWDJBB24F1NoNFKuQHEtU-IJTjsS5BdMnY9SLvBB8X0mhW1iQZtEkeyjSjxm-gT4GE2ELf5vFapMVayXER8m24R0SWrM3ZCByfbEZIzcChBYSZi_2MaWM?key=XWGfBjX1cX-o6y78AsuHcg)
