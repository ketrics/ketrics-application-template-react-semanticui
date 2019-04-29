SELECT DISTINCT
    CpbAno AS [key],
    CpbAno AS [label]
FROM [{database}].softland.cwcpbte WITH(NOLOCK)
ORDER BY 1 DESC
