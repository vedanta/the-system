# Lean API Template

**Purpose:** Essential API documentation for immediate integration
**Target Time:** 45 seconds to generate
**Use Case:** Backend projects, quick API reference for developers
**Condition:** Only generate for projects with backend components

---

# {PROJECT_NAME} API Reference

## Base URL
```
{api_base_url}
```

## Authentication
{auth_requirements_summary}

### Example Authentication
```bash
{authentication_example}
```

## Core Endpoints

### {Primary_Resource}
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/{resource}` | List all {resource} |
| POST   | `/{resource}` | Create new {resource} |
| GET    | `/{resource}/{id}` | Get specific {resource} |
| PUT    | `/{resource}/{id}` | Update {resource} |
| DELETE | `/{resource}/{id}` | Delete {resource} |

### Example Requests

**List {Primary_Resource}:**
```bash
curl -X GET "{api_base_url}/{primary_endpoint}" \
  -H "Authorization: {auth_header_example}"
```

**Create {Primary_Resource}:**
```bash
curl -X POST "{api_base_url}/{primary_endpoint}" \
  -H "Content-Type: application/json" \
  -H "Authorization: {auth_header_example}" \
  -d '{sample_create_payload}'
```

### Example Responses

**Success Response (200):**
```json
{sample_success_response}
```

**Created Response (201):**
```json
{sample_created_response}
```

## Additional Endpoints
{other_important_endpoints_list}

## Error Responses

**Standard Error Format:**
```json
{
  "error": "Error description",
  "code": "ERROR_CODE",
  "details": "Additional information"
}
```

**Common Error Codes:**
| Code | Status | Description |
|------|--------|-------------|
| 400  | Bad Request | Invalid request data |
| 401  | Unauthorized | Authentication required |
| 403  | Forbidden | Insufficient permissions |
| 404  | Not Found | Resource not found |
| 500  | Internal Server Error | Server error |

## Rate Limiting
{rate_limiting_info_if_applicable}

## Pagination
{pagination_info_if_applicable}

## Testing the API

### Health Check
```bash
curl {api_base_url}/health
```

### Interactive Documentation
Visit `{api_base_url}/docs` for interactive API documentation (if available).

---

**Need comprehensive API documentation?** Run `/ts-docs --full` for complete API reference with all endpoints, detailed schemas, code examples in multiple languages, and integration guides.