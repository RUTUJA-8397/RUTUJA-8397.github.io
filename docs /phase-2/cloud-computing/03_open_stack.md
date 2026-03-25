---
hide:
    - toc
---

# Proxmox VE: The Open-Source Virtualization & Private Cloud Platform

---

## What is Proxmox?

![Proxmox Logo](../../assets/images/proxmox.png)

### What is it?

**Proxmox VE (Virtual Environment)** is an **open-source platform** for running and managing **virtual machines (KVM)** and **containers (LXC)**, clustering multiple hosts, and providing enterprise-grade features (HA, live migration, backups, software-defined storage). It exposes a **web GUI**, CLI tools, and **RESTful APIs** so you can operate everything from a browser, scripts, or automation tools.

In simple terms:
Proxmox lets organizations run VMs and containers on their own hardware with built-in clustering, storage integrations (ZFS, Ceph, LVM, NFS), and backup — giving a lightweight private-cloud-like experience focused on virtualization and operational simplicity.

---

## Theoretical Definition

Proxmox VE is a **converged virtualization platform** that combines a KVM hypervisor, LXC containers, software-defined storage integrations, clustering and high-availability services, and management tooling (web UI and API) into a single distribution. It’s maintained and developed by **Proxmox Server Solutions GmbH** and distributed under open-source licenses, with an optional commercial subscription for enterprise support.

---

## Why Proxmox? (Role in Private Cloud / Virtual Infrastructure)

![Proxmox Architecture Diagram](../../assets/images/proxmox_arch.jpg)

### Key Benefits

* **Open-source with commercial support option** — no vendor lock-in, but enterprise subscription available.
* **All-in-one virtualization** — runs both KVM VMs and LXC containers from the same UI.
* **Simple clustering & HA** — build multi-node clusters with Corosync, enable HA for VMs/containers.
* **Flexible storage** — integrates ZFS, Ceph/RBD, LVM, NFS, iSCSI, directory storages and Proxmox Backup Server.
* **Web UI + API + CLI** — manage everything from the browser, scripts, or automation (Terraform, Ansible).
* **Lightweight private cloud** — ideal for labs, dev/test, edge, and many production uses where full cloud orchestration isn't required.

👉 Proxmox is widely used by small/medium enterprises, educational labs, and companies that want the operational advantages of a private cloud but with simpler deployment than a full cloud fabric.

---

## Proxmox Core Components

Proxmox VE bundles several components and integrations, each handling a specific role:

* **KVM/QEMU (VMs)** → Full virtualization for guest OSes.
* **LXC (Containers)** → Lightweight Linux containers for efficient workloads.
* **pve-manager (Web UI)** → The browser-based management console and API server.
* **pve-cluster / Corosync** → Cluster communication and quorum management.
* **HA Manager** → High-availability orchestration for VMs and containers.
* **Storage integrations** → ZFS, Ceph (RBD), LVM-Thin, iSCSI, NFS, directory, and Proxmox Backup Server.
* **Proxmox Backup Server (PBS)** → Deduplicating, incremental backup server designed for Proxmox environments.
* **Live migration & snapshotting** → Move running VMs between hosts and take snapshots (depends on storage).
* **QEMU/KVM tools (qm)** & **pct** → CLI tools for VM and container lifecycle.
* **API & REST endpoints** → Automation-friendly interfaces for integrations with Terraform/Ansible/CI pipelines.

---

## Proxmox vs Public Cloud (AWS/Azure) — quick comparison

| Feature           | Proxmox VE (On-prem)                             | AWS/Azure (Public Cloud)                  |
| ----------------- | ------------------------------------------------ | ----------------------------------------- |
| **Ownership**     | Organization-owned and managed                   | Provider-owned and managed                |
| **Deployment**    | Runs on local servers (single cluster to many)   | Runs on provider’s global infra           |
| **Cost Model**    | CapEx (hardware) + optional subscription         | OpEx (pay-as-you-go)                      |
| **Customization** | Full control of hypervisor, storage, network     | Limited to provider services              |
| **Scale**         | Scales across on-prem clusters; needs planning   | Essentially unlimited (provider scale)    |
| **Use Case**      | Private virtualization, labs, edge, on-prem apps | Global apps, serverless, managed services |

👉 Use Proxmox when you need tight control of your hardware, cost predictability, on-prem data residency, or a simple private-cloud stack focused on VMs/containers.

---

## Vendors & Support

Proxmox VE is produced by **Proxmox Server Solutions GmbH**. Options around the product ecosystem:

* **Proxmox VE (community edition)** — free, open-source.
* **Proxmox VE subscription** — enterprise repository access, technical support, and maintenance updates.
* **Proxmox Backup Server (PBS)** — dedicated backup product; has community and subscription options.
* **Third-party consultants & integrators** — many vendors provide Ceph, ZFS, or HA design & support services.

---

## Real-World Use Cases

* **Virtualization platform for labs & education:** Run many student VMs/containers with easy snapshots and rollbacks.
* **Edge & branch datacenters:** Lightweight clusters that run KVM + LXC with local storage.
* **Small/medium enterprise virtualization:** Replace legacy hypervisors with a unified, open platform.
* **Ceph-backed resilient storage clusters:** Combine Proxmox + Ceph for scalable block/object storage.
* **Backup & DR workflows:** Use Proxmox Backup Server for efficient backups and quick restores.
* **Dev/Test & CI environments:** Provision VMs/containers programmatically via API.

---

## Example Scenario

At **TechOps Inc.**, the IT team wants a private virtualization platform for developers and QA.

* **Deployment:** Proxmox VE deployed on 5 servers as a cluster.
* **Compute:** Developers get KVM VMs for full OS testing and LXC containers for lightweight app stacks.
* **Storage:** ZFS on local hosts for some workloads, and a Ceph cluster for resilient block storage used by production VMs.
* **Management:** Engineers use the Proxmox web UI and the REST API to provision templates and automate with Ansible.
* **Backups:** Proxmox Backup Server handles deduplicated, incremental backups of VMs and containers.
* **Networking:** Linux bridges and VLANs isolate tenant networks; SDN features or external virtual routers can be integrated.

This setup gives TechOps a streamlined, AWS-like developer experience for VM self-service (templates, snapshots, restore) while staying fully on-prem and cost-predictable.

---

!!! tip "Pro-Tip"
    Proxmox is ideal when you want a **single product to cover VMs, containers, clustering, storage integrations, and backups** without deploying a full cloud orchestration stack.

!!! tip "Fun Fact"
    Proxmox VE’s tight integration with **Proxmox Backup Server** gives very efficient backups thanks to chunk-level deduplication and incremental storage.

---

# Summary

* Proxmox VE is an **open-source virtualization platform** focusing on KVM VMs, LXC containers, clustering, and storage integration.
* It provides a unified web UI, CLI and REST API for management and automation.
* Best for private virtualization, labs, edge clusters, SMB production, and scenarios that prefer simplicity over a full cloud fabric.
* Often paired with Ceph and Proxmox Backup Server for resilient storage and enterprise-grade backups.

---
