resource "azurerm_storage_account" "storage_account" {
  resource_group_name = var.resource_group_name
  location            = var.location

  name = var.storage_account_name

  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"

  static_website {
    index_document = "index.html"
  }
}


resource "azurerm_storage_blob" "website_files" {
  for_each = local.website_files

  name                   = each.key
  storage_account_name   = azurerm_storage_account.storage_account.name
  storage_container_name = "$web"
  type                   = "Block"
  content_type           = lookup({
    "index.html" = "text/html",
    "style.css"  = "text/css",
    "script.js"  = "application/javascript"
    # Add additional mappings as needed
  }, each.key, "application/octet-stream")
  source                 = each.value
}

locals {
  website_files = {
    "index.html" = "index.html"
    "style.css"  = "style.css"
    "script.js"  = "script.js"
  }
}
