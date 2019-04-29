SELECT
    VenCod  AS [key],
    VenDes  AS [label]
FROM [{database}].softland.cwtvend WITH(NOLOCK)
ORDER BY
    VenDes
