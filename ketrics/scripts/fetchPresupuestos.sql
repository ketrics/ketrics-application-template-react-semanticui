SELECT DISTINCT
    Preop_id AS [key],
    Preop_id AS [label]
FROM [{database}].[softland].[cwpreop] WITH(NOLOCK)
ORDER BY Preop_id
