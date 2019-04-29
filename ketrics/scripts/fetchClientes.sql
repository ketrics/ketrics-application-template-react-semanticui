WITH clientes AS (
	SELECT DISTINCT CodAux FROM [{database}].softland.iw_gsaen WITH(NOLOCK)
)
SELECT
    a.CodAux  AS [key],
    a.NomAux  AS [label]
FROM [{database}].softland.cwtauxi a WITH(NOLOCK)
INNER JOIN clientes c ON a.CodAux=c.CodAux
ORDER BY
    a.NomAux
