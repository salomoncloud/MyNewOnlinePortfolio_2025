output "resource_group_name" {
  value = azurerm_resource_group.enterprise_rg.name
}

output "storage_account_name" {
  value = azurerm_storage_account.storage_account.name
}

output "primary_web_host" {
  value = azurerm_storage_account.storage_account.primary_web_host
}

output "cdn_endpoint_hostname" {
  value       = azurerm_cdn_endpoint.cdn_endpoint.host_name
  description = "The hostname of the Azure CDN endpoint"
}